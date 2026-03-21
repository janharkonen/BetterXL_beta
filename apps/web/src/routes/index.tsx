import { createFileRoute } from "@tanstack/react-router";
//import type { Sheet } from "@fortune-sheet/core";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useQuery } from "convex/react";
import { api } from "@BetterXL_beta/backend/convex/_generated/api";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  //const setTestData = useMutation(api.testData.setTestData);
  const excelData = useQuery(api.testData.getTestData);
  if (!excelData) {
    return <div>No data</div>;
  }
  console.log("excelData", excelData);
  const excelDataExample = [
    {
      name: excelData[0].sheetName, //Worksheet name
      color: "", //Worksheet color
      id: "0", //Worksheet id
      status: 1, //Worksheet active status
      order: 0, //The order of the worksheet
      hide: 0, //Whether worksheet hide
      row: Number(excelData[0].row), //the number of rows in a sheet
      column: Number(excelData[0].column), //the number of columns in a sheet
      defaultRowHeight: 19, //Customized default row height
      defaultColWidth: 73, //Customized default column width
      celldata: [], //Initial the cell data
      config: {
        merge: {}, //merged cells
        rowlen: {}, //Table row height
        columnlen: {}, //Table column width
        rowhidden: {}, //hidden rows
        colhidden: {}, //hidden columns
        borderInfo: [], //borders
        authority: {}, //Worksheet protection
      },
      scrollLeft: 0, //Left and right scroll bar position
      scrollTop: 315, //Up and down scroll bar position
      luckysheet_select_save: [], //selected area
      calcChain: [], //Formula chain
      isPivotTable: false, //Whether is pivot table
      pivotTable: {}, //Pivot table settings
      filter_select: { row: [], column: [] }, //Filter range
      filter: undefined, //Filter configuration
      luckysheet_alternateformat_save: [], //Alternate colors
      luckysheet_alternateformat_save_modelCustom: [], //Customize alternate colors
      luckysheet_conditionformat_save: [], //condition format
      chart: [], //Chart configuration
      zoomRatio: 1, // zoom ratio
      image: [], //image
      showGridLines: 1, //Whether to show grid lines
    },
  ];

  return (
    <div className="h-full w-full">
      <Workbook
        data={excelDataExample}
        onChange={(data) => console.log("onChange data", data)}
      />
    </div>
  );
}
