import { createFileRoute } from "@tanstack/react-router";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useMutation, useQuery } from "convex/react";
import { api } from "@BetterXL_beta/backend/convex/_generated/api";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const setTestData = useMutation(api.testData.setTestData);
  const handleChange = (data: any) => {
    console.log(data);
    setTestData({
      data: data,
    });
  };
  const excelData = useQuery(api.testData.getTestData);

  return (
    <div className="h-full w-full">
      <Workbook data={excelData} onChange={handleChange} />
    </div>
  );
}
