export const calcReturnOfInvestment = (proceeds, purchaseAmount) => {
	const ROI = Number((proceeds / purchaseAmount) * 100).toFixed(1);

	return ROI;
};
