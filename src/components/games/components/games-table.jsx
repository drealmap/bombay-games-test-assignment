import React, { useState } from "react";
import moment from "moment/moment";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { DeleteGameModal } from "../../delete-game";
import { useGetGame } from "../../../custom-hooks";

export const GamesTable = ({
  gamesList,
  setEdit,
  toggleGameModal,
  setGameData,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const { isGameLoading } = useGetGame(selectedGameId, setGameData);

  const toggleGameDelete = () => {
    setDeleteModal(!deleteModal);
  };

  const prePopulateGame = (id) => {
    setSelectedGameId(id);
  };

  return gamesList?.map(({ name, category, publisher, releaseDate, _id }) => {
    return (
      <div
        key={_id}
        className="grid grid-cols-12 border-y text-xs md:text-sm leading-[18px] text-[#5F6D7E] border-[#EAEBF0]"
      >
        <div className="col-span-3 px-3 py-3 md:px-6 font-switzer">
          <p className="">{name}</p>
        </div>
        <div className="col-span-3 px-3 py-3 truncate md:px-6 font-switzer">
          <p className="">{category}</p>
        </div>
        <div className="col-span-2 px-3 py-3 truncate md:px-6 font-switzer">
          <p className="">{publisher}</p>
        </div>
        <div className="col-span-3 px-3 py-3 md:px-6 font-switzer">
          <p className="">{moment(releaseDate).format("LL")}</p>
        </div>
        <div className="flex col-span-1 gap-1 py-3 sm:gap-2 ">
          <AiOutlineEdit
            onClick={() => {
              setEdit(true);
              prePopulateGame(_id);
              toggleGameModal();
            }}
            className="text-2xl cursor-pointer "
            style={{ color: "blue" }}
          />
          <MdDelete
            onClick={() => {
              setEdit(true);
              toggleGameDelete();
            }}
            className="text-2xl"
            style={{ color: "red", cursor: "pointer" }}
          />
          {deleteModal ? (
            <DeleteGameModal toggleGameDelete={toggleGameDelete} _id={_id} />
          ) : null}
        </div>
      </div>
    );
  });
};
