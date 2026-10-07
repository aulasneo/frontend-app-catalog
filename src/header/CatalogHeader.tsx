import Header from '@edx/frontend-component-header';

import { useMenuItems } from './hooks/useMenuItems';

const CatalogHeader = () => {
  const { mainMenu, secondaryMenu } = useMenuItems();

  return (
    <div className="prime-header">
      <Header
        mainMenuItems={mainMenu}
        secondaryMenuItems={secondaryMenu}
      />
    </div>
  );
};

export default CatalogHeader;
