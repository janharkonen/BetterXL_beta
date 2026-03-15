import { query } from "./_generated/server";

export const getTestData = query({
  handler: async (ctx) => {
    const testRow = await ctx.db.query("test_table").first();
    const testData = testRow?.testData;
    return testData ?? "No test data found";
  },
});
