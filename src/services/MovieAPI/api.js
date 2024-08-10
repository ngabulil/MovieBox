import api from "../api";
import { wrapperApi } from "../wrapperApi";

export const getAllMovies = async () =>
  wrapperApi(async () => {
    try {
      const response = await api.get("/movie");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

export const getMovieById = async (id) =>
  wrapperApi(async () => {
    try {
      const response = await api.get(`/movie/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

export const createMovie = async (data) =>
  wrapperApi(async () => {
    try {
      const response = await api.post("/movie", data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

export const updateMovie = async (id, data) =>
  wrapperApi(async () => {
    try {
      const response = await api.put(`/movie/${id}`, data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

export const deleteMovie = async (id) =>
  wrapperApi(async () => {
    try {
      const response = await api.delete(`/movie/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
