/**
 * GeoJSON Schemas for Mongoose
 * 
 * rough GeoJSON schemas for use with mongoose schema creation
 *   
 * Based on GeoJSON Spec @ http://geojson.org/geojson-spec.html
 *     
 * Created by Ben Dalton (ben@rideamigos) on 3/27/14.
 * Copyright RideAmigos (http://rideamigos.com)
 **/

var GeoJSON;
module.exports = GeoJSON = {}

GeoJSON.Geometry = {
  'type'     : { type: String, enum: ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"] },
  coordinates: []
}

GeoJSON.Point = {
  'type'     : { type: String, default: "Point" },
  coordinates: []
}

GeoJSON.MultiPoint = {
  'type'     : { type: String, default: "MultiPoint" },
  coordinates: []
}

GeoJSON.MultiLineString = {
  'type'     : { type: String, default: "MultiLineString" },
  coordinates: []
}

GeoJSON.Polygon = {
  'type'     : { type: String, default: "Polygon" },
  coordinates: []
}

GeoJSON.MultiPolygon = {
  'type'     : { type: String, default: "MultiPolygon" },
  coordinates: []
}

GeoJSON.GeometryCollection = {
  'type'    : { type: String, default: "GeometryCollection" },
  geometries: [GeoJSON.Geometry]
}

GeoJSON.Feature = {
  id        : { type: String },
  'type'    : { type: String, default: "Feature" },
  geometry  : GeoJSON.Geometry,
  properties: { }
}

GeoJSON.FeatureCollection = {
  'type'  : { type: String, default: "FeatureCollection" },
  features: [ GeoJSON.Feature ]
}

GeoJSON.requiredAddressFeature = {
  id        : { type: String },
  'type'    : { type: String, default: "Feature", required:true },
  geometry  : {
    'type': { type:String, default:"Point", required:true },
    coordinates:  {type:"Array", required:true }
  },
  properties: { type: "Object" }
}


GeoJSON.validatePointCoordinates = function(value,message){
  "use strict";
  var msg = message || "Must provide valid coordinates for Point Geometry";
}


