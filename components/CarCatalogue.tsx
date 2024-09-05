import { fetchCars } from "@/utils";
import Home from "@/components/Home";
import { CarProps, CarCatalogueProps } from "@/types";

const CarCatalogue = async ({ searchParams }: CarCatalogueProps) => {
  const allCars: CarProps[] = await fetchCars(searchParams);

  console.log("allCars", allCars);

  return <Home allCars={allCars} searchParams={searchParams} />;
};

export default CarCatalogue;
