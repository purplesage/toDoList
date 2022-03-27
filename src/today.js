import { homeContentDefault } from "./home";

const todayContent = homeContentDefault();
todayContent.ulHeader.innerHTML = "<h3>today</h3><h3>Due Date</h3>";

export {todayContent};
