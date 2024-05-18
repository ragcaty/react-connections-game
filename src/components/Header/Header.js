import React from "react";

import InfoModal from "../modals/InfoModal";

function Header() {
  return (
    <header>
      <h1 className="text-xl text-center mt-4 font-space-mono">Connections</h1>
      <InfoModal />
    </header>
  );
}

export default Header;
