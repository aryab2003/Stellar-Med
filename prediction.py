import streamlit as st
import numpy as np
import pickle as pkl

with open('model_hckod.pkl','rb') as f:
    mdl = pkl.load(f)
with open('encder.pkl','rb') as f:
    enc = pkl.load(f)

# Create a Streamlit app
st.title("Heart-Disease-Prediction")

# Input elements
st.sidebar.header("Input Parameters")

age = st.sidebar.number_input("Enter Age")
gender = st.sidebar.number_input("Enter 0 if female and 1 if male")
resting_bp = st.sidebar.number_input("Enter bp")
cholesterol = st.sidebar.number_input("Enter cholesterol")
max_heart_rate = st.sidebar.number_input("Enter maximum heart rate")

st.write("0 if diagnosed with heart disease, 1 if healthy heart")


if st.sidebar.button("Predict"):
    

    # Make predictions
    prediction = mdl.predict(enc.transform([[age,gender,'asymptomatic',resting_bp,cholesterol,0,max_heart_rate,1,3.4,'flat',0,'normal']]))

    # Display the result
    st.write("Prediction:", prediction[0])

# Add a description or instructions
st.sidebar.info("Enter a numeric value and click 'Predict' to see the result.")
