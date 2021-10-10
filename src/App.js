import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// 처음부터 필요한 페이지를 로드하는게 아니라
//import ListPage from "./pages/ListPage/index";
//import ViewPage from "./pages/ViewPage/index";

//lazy를 통해 동적 import
// fallback = 안에있는 컴포넌트가 제대로 로드되지 않았을 때 어떤 문구를 띄어줄 것인가를 정함
const ListPage = lazy(() => import("./pages/ListPage/index"));
const ViewPage = lazy(() => import("./pages/ViewPage/index"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>로딩 중...</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
