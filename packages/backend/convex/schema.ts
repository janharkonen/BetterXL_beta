import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  test_table: defineTable({
    testData: v.array(
      v.object({
        sheetName: v.string(),
        row: v.int64(),
        column: v.int64(),
        sheetData: v.array(
          v.object({
            row: v.int64(),
            column: v.int64(),
            value: v.string(),
          }),
        ),
      }),
    ),
  }),
});
