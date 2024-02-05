/**************************
 *
 *
 *
 * <div id ="parent">
 * <div id = "child">
 * <h1>hello I'm kajol </h1>
 * <h2>hello I'm kumari </h2>
 * </div>
 * <div id = "child">
 * <h1>hello I'm kajol </h1>
 * <h2>hello I'm kumari </h2>
 * </div>
 * </div>
 *
 *ReactElement(object) =>HTML(Browser UnderStands)
 *
 *
 * ****************************************/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello I'm kajol"),
    React.createElement("h1", {}, "hello I'm samar"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello I'm kajol"),
    React.createElement("h1", {}, "hello I'm samar"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyx: "abc" },
//   "hello World  from  React"
// );
console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
