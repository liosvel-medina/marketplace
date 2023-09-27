type UseAssetsType = {
	getAsset: (asset: string) => string;
};

export const useAssets = (): UseAssetsType => {
	const getAsset = (asset: string): string => new URL(`../assets/${asset}`, import.meta.url).toString();

	return { getAsset };
};
