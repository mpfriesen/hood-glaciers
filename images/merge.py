import rasterio

file_list = ['clipped/LT05_L2SP_046028_20010920_20200905_02_T1_SR_B5_c2.TIF', 'clipped/LT05_L2SP_046028_20010920_20200905_02_T1_SR_B4_c2.TIF', 'clipped/LT05_L2SP_046028_20010920_20200905_02_T1_SR_B4_c2.TIF']

# Read metadata of first file
with rasterio.open(file_list[0]) as src0:
	meta = src0.meta

# Update meta to reflect the number of layers
meta.update(count = len(file_list))

# Read each layer and write it to stack
with rasterio.open('stack.tif', 'w', **meta) as dst:
	for id, layer in enumerate(file_list, start=1):
		with rasterio.open(layer) as src1:
			dst.write_band(id, src1.read(1))