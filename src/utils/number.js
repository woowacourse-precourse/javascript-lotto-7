export const formatRate = (rate) => {
	const options = {
		maximumFractionDigits: 1,
		minimumFractionDigits: 1,
	};
	const fixedRate = rate.toFixed(1);
	return fixedRate.toLocaleString('ko-KR', options);
};

export const formatCurrency = (currency) => {
	return currency.toLocaleString('ko-KR');
};
