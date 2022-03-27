import { homeContentDefault } from "./home";

const weekContent = homeContentDefault();
weekContent.ulHeader.innerHTML = "<h3>week</h3><h3>Due Date</h3>";

export {weekContent};