import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const authenticationStates = create((set, get) => ({
    authenticatedUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuthentication: true,
    isUpdatingProfile: false,

    authenticationCheck: async () => {
        try {
            const response = axiosInstance.get("/authentication/user");
            set({authenticatedUser: response.data});
        } catch (err) {
            console.log("An error occurred while checking user authentication: ", err);
            set({authenticatedUser: null});
        } finally {
            set({isCheckingAuthentication: false});
        }
    },

    signup: async (data) => {
        set({isSigningUp: true});
        try {
            const response = await axiosInstance.post("/authentication/register", data);
            set({authenticatedUser: response.data});
            toast.success("Registered successfully");
        } catch (err) {
            console.log("An error occurred while registering: ", err.response.data.message);
        } finally {
            set({isSigningUp: false});
        }
    },

    signin: async (data) => {
        set({isLoggingIn: true});
        try {
            const response = await axiosInstance.post("/authentication/login", data);
            set({authenticatedUser: response.data});
            toast.success("Logged in successfully");
        } catch (err) {
            console.log("An error occurred while logging in: ", err.response.data.message);
        } finally {
            set({isLoggingIn: false});
        }
    },

    logout: async () => {
        try {
            await axiosInstance.get("/authentication/logout");
            set({authenticatedUser: null});
            toast.success("Logged out successfully");
        } catch (err) {
            console.log("An error occurred while logging out: ", err.response.data.message);
        } 
    }
}));