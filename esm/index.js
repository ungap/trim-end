var trimEnd = ''.trimEnd || function () {
	return this.replace(/[\s\uFEFF\xA0]+$/, '');
};
export default trimEnd;
