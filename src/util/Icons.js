import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import styled, { css } from "styled-components";

const getButton = (buttonType) => {
	const resultButton = styled(buttonType)`
		&& {
			${({ theme: { colors }, color, size }) => css`
				color: ${colors[color]};
				width: ${size}px;
				height: ${size}px;
			`}
		}
	`;
	return resultButton;
};

const CancelButton = getButton(CancelIcon);
const SearchButton = getButton(SearchIcon);
const MenuButton = getButton(MenuIcon);
const AccountButton = getButton(AccountCircleRoundedIcon);
const HeartButton = getButton(FavoriteBorderIcon);
const PrevButton = getButton(ArrowBackIosNewIcon);
const NextButton = getButton(ArrowForwardIosIcon);
const AddButton = getButton(AddIcon);
const RemoveButton = getButton(RemoveIcon);
const CheckButton = getButton(CheckIcon);
const RemoveCircleButton = getButton(RemoveCircleOutlineIcon);
const AddCircleButton = getButton(AddCircleOutlineIcon);
const PauseCircleButton = getButton(PauseCircleOutlineIcon);

export {
	CancelButton,
	SearchButton,
	MenuButton,
	AccountButton,
	HeartButton,
	PrevButton,
	NextButton,
	AddButton,
	RemoveButton,
	CheckButton,
	RemoveCircleButton,
	AddCircleButton,
	PauseCircleButton,
};
