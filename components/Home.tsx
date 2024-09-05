"use client";

import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { yearsOfProduction, fuels } from "@/constants";
import { CarProps, FilterProps, HomeProps } from "@/types";

const Home = ({ allCars, searchParams }: HomeProps) => {
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log("isDataEmpty", isDataEmpty);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams?.limit || 10) / 10}
              isNext={(searchParams?.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops! no results</h2>
            <p>No cars available at the moment.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
