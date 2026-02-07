import ReactPdf from "@react-pdf/renderer";
import { MyDocument } from "./document.tsx"
ReactPdf.render(<MyDocument />, "output/CV.pdf")


