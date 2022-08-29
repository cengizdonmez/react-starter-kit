import { memo } from 'react';
function Header() {
  console.log('render Header'); 
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}
export default memo(Header);