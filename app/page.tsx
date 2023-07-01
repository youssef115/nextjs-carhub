
import Image from "next/image";
//import Hero from '@/components/Hero' in this case we call import one by one or we can use the index.ts to get all the import component
import { SearchBar, CustomFilter, Hero, CarCard } from "@/components/Index";

import { fetchCars } from "@/utils";
export default async function Home() {

  const allCars=await fetchCars()

 const isDataEmpty=!Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>

      {
        !isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map(car=>(
                <CarCard car={car}/>
              ))}
            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )

      }
    </main>
  );
}
