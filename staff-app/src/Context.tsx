import { createContext, useState, PropsWithChildren } from "react";
import { data } from "./data";

const getRundomNumber = () => Math.floor(Math.random() * 900) + 100;

type StaffItemType = {
  id: number;
  key: number;
  name: string;
  age: string;
};

const dataWithKey = data.map((item) => ({ ...item, key: item.id }));

interface IAppContextData {
  listStaff: StaffItemType[] | [];
  addNewStaff: (id: number, name: string, age: string) => void;
  deleteStaff: (id: number) => void;
}

const Context = createContext<IAppContextData>({
  listStaff: [],
  addNewStaff: () => {},
  deleteStaff: () => {},
});

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [listStaff, setListStaff] = useState(dataWithKey);

  const addNewStaff = (id: number, name: string, age: string) => {
    const index = listStaff.findIndex((item) => item.id === id);
    if (index < 0) {
      setListStaff([
        ...listStaff,
        { id: getRundomNumber(), key: getRundomNumber(), name: name, age: age },
      ]);
    } else {
      const editItem = listStaff.filter((el) => el.id === id);
      const updateItem = Object.assign(editItem[0], { name: name, age: age });
      const updatedListStaff = listStaff.slice();
      updatedListStaff.splice(index, 1, updateItem);
      setListStaff([...updatedListStaff]);
    }
  };

  const deleteStaff = (id: number) => {
    setListStaff(listStaff.filter((item) => item.id !== id));
  };

  return (
    <Context.Provider value={{ listStaff, addNewStaff, deleteStaff }}>
      {children}
    </Context.Provider>
  );
};

export { Context };
