import { render, screen } from "@testing-library/react";
//import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { Index } from "./page/Index";
import Informacion from "./component/Informacion";
let article;
let titulo;
afterEach(() => {
  render(<Informacion />);
  article = screen.getByRole("article", { name: "parrafo principal" });
  //titulo =screen.getByText()
});
test("visibilizar texto", () => {
  render(<Index />);
  const articulo = screen.getByRole("article", { name: "parrafo principal" });
  expect(articulo).toBeInTheDocument();
});
test("validar clases", () => {
  expect(article).toHaveClass("article");
  //expect(article).toHaveClass("titulo");
});
// test("validar estilos", () => {
//   expect(article).toHaveStyle(
//     'color:blue'
//   )
// });
// test("validat estilos en el texto", () => {
//   expect(article).toHaveClass("article");
// });
