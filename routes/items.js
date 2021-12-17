const { getItems, getItem } = require("../controllers/items");

// Item schema
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" }
  }
};

// Options for getting all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item
      }
    }
  },
  handler: getItems
};

// Options for getting one item
const getItemOpts = {
  schema: {
    response: {
      200: Item
    }
  },
  handler: getItem
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOpts);

  // Get single item
  fastify.get("/items/:id", getItemOpts);

  done();
}

module.exports = itemRoutes;
