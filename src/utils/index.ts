import { DataTypeExtended } from "../type";
import axios from "axios";

const download = (item: DataTypeExtended) => {
	const { url, title } = item;
	return axios({
		url: url,
		method: "GET",
		responseType: "blob",
	}).then((response) => {
		const href = URL.createObjectURL(response.data);

		const link = document.createElement("a");
		link.href = href;
		link.setAttribute("download", `${title}.jpg`);
		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	});
};

export const downloadAll = (data: DataTypeExtended[]) => {
	data.forEach((item: DataTypeExtended) => {
		if (item.selected) {
			download(item);
		}
	});
};
