import Button from '../ButtonAccountComponent/ButtonAccountComponent';
import { MenuItem } from './style';

const MenuItems = ({ data, onClick }) => {
  return (
    <Button leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
  );
};

export default MenuItems;
