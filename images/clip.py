from osgeo import gdal
import os





inputPath = "landsat/"
outputPath =  "clipped/"
shp_clip = "ignore/hood_bounds.shp"

bandList = [band for band in os.listdir(inputPath) if band[-4:]=='.tif']
# print(bandList)


for band in bandList:
	print(outputPath + band[:-4]+'_c2'+band[-4:])
	options = gdal.WarpOptions(cutlineDSName=shp_clip,cropToCutline=True)
	outBand = gdal.Warp(srcDSOrSrcDSTab=inputPath + band,destNameOrDestDS=outputPath + band[:-4]+'_c2'+band[-4:],options=options)
	outBand= None


