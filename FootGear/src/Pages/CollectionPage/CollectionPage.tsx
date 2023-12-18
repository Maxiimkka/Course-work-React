import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import { MSnkCard } from "../../Components/SnkCard/SnkCard";
import { fetchSneakers } from "../../redux/api/collection.api";
import { setStateFilters } from "../../redux/Fillter/slice";
import { RootState, useAppDispatch } from "../../redux/store";
import './CollectionPage.scss'
import { motion } from "framer-motion";
import Sort, { sortItems } from "../../Components/Sort/Sort";
import { useNavigate } from "react-router-dom";
import qs from "qs";

const CollectionPage: React.FC = () => {
  const items = useSelector((state: RootState) => state.sneakers.items)
  const currentPage = useSelector((state: RootState) => state.fillter.pageNumber)
  const active = useSelector((state: RootState) => state.full.active)
  const selected = useSelector((state: RootState) => state.fillter.item)
  const open = useSelector((state: RootState) => state.fillter.open)
  const status = useSelector((state: RootState) => state.sneakers.status)

  const isMounted = useRef(false);
  const searchParams = useRef(false);

  const [changedPage, setChangedPage] = useState(false)

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  async function getSnk() {
    const sort = selected.sortProperty.replace("-", "");
    const order = selected.sortProperty.includes("-") ? "asc" : "desc";

    dispatch(fetchSneakers({ currentPage, sort, order }))
    if (active) {
      window.scrollTo(0, window.innerHeight * 1.8);
    } else {
      window.scrollTo(0, 0);
    }
    if (open) {
      window.scrollTo(0, window.innerHeight * 1.7);
    }
    if (changedPage) {
      window.scrollTo(0, window.innerHeight * 1.7);
    }
  }
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        currentPage,
        selected
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [currentPage, selected]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      )
      const sort = sortItems.find(
        (obj) => obj.sortProperty === params.sort
      );

      dispatch(
        setStateFilters({
          ...params,
          sort
        })
      );
    }
  }, []);

  useEffect(() => {
    if (!searchParams.current) {
      getSnk();
    }
    searchParams.current = false;
  }, [selected, currentPage]);

  const featureAnimation = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    }),
  }
  const textAnimation = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.2 }
    }),
  }

  return (
    <div className="collection">
      <Header />
      <Main />
      <section>
        <div className="body-coll">
          <div className="coll-cards-content">
            <div className="coll-titl">
              <motion.h1 className="body-title" initial="hidden" whileInView="visible" custom={1} variants={textAnimation} viewport={{ once: true }}>Our Collection</motion.h1>
              <div className="body-sort"><Sort /></div>
            </div>
            {status === 'Error'
              ? (<h1 style={{ color: 'black' }}>Was Error...</h1>)
              : <>{status === 'Loading'
                ? (<div className="body-loader">Loading</div>)
                : <ul className="coll-cards">
                  {items.map((snk, index) => (
                    <MSnkCard key={snk.id} {...snk} initial="hidden" whileInView="visible" viewport={{ amount: 0.4, once: true }} whileHover={{ scale: 1.05 }} custom={index + .1} variants={featureAnimation} />
                  ))}
                </ul>}</>}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default CollectionPage