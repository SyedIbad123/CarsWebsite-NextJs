import CarCatalogue from "@/components/CarCatalogue";

const Page = ({ searchParams }: { searchParams: any }) => {
  const paramsObject = {
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2024,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  };

  return <CarCatalogue searchParams={paramsObject} />;
};

export default Page;
