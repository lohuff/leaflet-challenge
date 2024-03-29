# Leaflet Challenge
## Screenshot of Map I Created:
<img width="1437" alt="finalQuakeMap" src="https://user-images.githubusercontent.com/119692610/236585258-93076697-d915-46c9-a147-c057eb166812.png">


## Instructions
Your first task is to visualize an earthquake dataset. Complete the following steps:
1. Get your dataset. To do so, follow these steps:
  - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed Links to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
  
  ![](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/3-Data.jpg)

  - When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
  
  ![](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/4-JSON.jpg)
  
 2. Import and visualize the data by doing the following:
  - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
    - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher    magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
    - Hint: The depth of the earth can be found as the third coordinate for each earthquake.
  - Include popups that provide additional information about the earthquake when its associated marker is clicked.
  - Create a legend that will provide context for your map data.
  - Your visualization should look something like the following map:
  
  ![](https://static.bc-edx.com/data/dl-1-2/m15/lms/img/2-BasicMap.jpg)

