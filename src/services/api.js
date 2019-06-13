import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

/* Endereços para cada emulador/simulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */
const api = axios.create({
  baseURL: "http://35.198.27.139:80"
});
// baseURL: "http://165.22.190.47:3333"

/**
 * Get token recebe o email e password, resultado positivo seta o token no Storage
 *
 * STORAGE:
 * @app:token
 */

api.getToken = async user => {
  try {
    const data = await api.post("/session", {
      email: user.email,
      password: user.password
    });
    await AsyncStorage.setItem("@app:token", data.data.token);
    return data;
  } catch (error) {
    return error;
  }
};

export default api;
