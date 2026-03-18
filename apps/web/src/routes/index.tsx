import { createFileRoute } from "@tanstack/react-router";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const handleChange = (data: any) => {
    console.log(data);
    setExcelData(data);
  };
  const [excelData, setExcelData] = useState<any>([
    {
      id: "1",
      name: "Sheet 1",
      celldata: [
        {
          r: 0,
          c: 0,
          v: {
            v: "Welcome to BetterXL",
            ct: { fa: "General", t: "g" },
          },
        },
      ],
    },
  ]);

  return (
    <div className="h-full w-full">
      <Workbook data={excelData} onChange={handleChange} />
    </div>
  );
}
