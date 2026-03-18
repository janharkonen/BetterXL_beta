import { createFileRoute } from "@tanstack/react-router";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const excelData = [
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
        {
          r: 1,
          c: 0,
          v: {
            v: "fortune-sheet is now rendering",
            ct: { fa: "General", t: "g" },
          },
        },
      ],
    },
  ];

  return (
    <div className="h-full min-h-0 w-full">
      <Workbook data={excelData} />
    </div>
  );
}
