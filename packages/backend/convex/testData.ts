import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

const id = "j5717nmq8kef1mpqqyrgdxq9tn835h79" as Id<"test_table">;
export const getTestData = query({
  handler: async (ctx) => {
    const convex_row = await ctx.db.get("test_table", id);
    const testData = convex_row?.testData;
    return testData;
  },
});

export const setTestData = mutation({
  args: {
    data: v.any(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch("test_table", id, {
      testData: args.data,
    });
  },
});
