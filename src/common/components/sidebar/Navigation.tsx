import { useTranslation } from 'next-i18next';

import { MENU_ITEMS } from '@/common/constant/menu';

import Menu from './Menu';

const Navigation = () => {
  const { t } = useTranslation('navigation');
  
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow).map((item) => ({
    ...item,
    title: t(`menu.${item.title.toLowerCase()}`),
  }));

  return <Menu list={filteredMenu} />;
};

export default Navigation;
