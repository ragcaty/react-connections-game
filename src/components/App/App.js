import React from "react";
import Header from "../Header";
import Game from "../Game";

import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";
import SidebarMenu from "../../../../sidebar";

function App() {
  return (
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="wrapper">
    <SidebarMenu />
          <Toaster />
          <Header />
          <Game />
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
  );
}

export default App;
