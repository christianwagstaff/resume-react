import parse from "html-react-parser";

const Parser = (props) => {
  return parse(props.children);
};

export default Parser;
