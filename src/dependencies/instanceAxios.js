import axios from "axios";
import jwt from "jsonwebtoken";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    jwt.verify(
      token,
      "637ff5fc2bb913febacd19058326a9cb72b88cbdaca21b1b0b7bb24d470950580af34782af9453b2e9baa3e9b88a402ef0d5611781a61eb455926f5527fdf530271c08206c8b7e7002a695261fbd6e0494323ee2de31db9ffb2448108d88cdef846545c7ad7c5398faa1038aa67aa2e0e3901f99f199d01852ce896eee0e59261d4aff4b2b3bcf2f422801c57c57f0f0a21ea8b22e77eefffd4c1d84c33c26fe5afdcdb70a6f9e31fd139bcbe51013c04be02bd6cbac08c410fafb6e9637fbe8072460d360c7b3be18773314d1404fb3b61e844172ce87634a4bd0cd8e1de0cc76f5641eed413fcb9d691b097c05cc50d11dba2f43f428f0d58b2f94d40eb691"
    );
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;