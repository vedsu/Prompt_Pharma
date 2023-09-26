import streamlit as st
import pandas as pd
import numpy as np
import time
import openai
from openai.error import OpenAIError
import re
st.set_page_config(page_title="Vedsu Technology", page_icon="📧")

def main():
    st.header("Job Title Prompting!")

    try:    
        # Upload CSV file
        uploaded_file = st.file_uploader("Upload CSV file", type=["csv"])
    except:
        st.write("file fromat not supported")
    if uploaded_file:
        df_csv = pd.read_csv(uploaded_file, encoding="ISO-8859-1")
        # Record the start time
        start_time = time.time()
        df = pd.DataFrame()
        st.write("Processing.........")
        # OpenAI Configuration
        openai.api_key = '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'
        count = 0
        for index, row in df_csv.iterrows():
            count+=1
            title= row["JobTitle"]
            prompt =  f"""  Correct the "provided job title" for Industry "Pharmaceutical" and assign  "standard global job titles" 
            1. Extract the most appropriate standard 'designations' from the assigned ""standard global job titles"" separated by commas, in their standard full form and correct any spelling or typo errors if any.
            2. Remove 'roles' and 'departments' from 'designations'.
            3. Also suggest the 'Department' for that 'designations' that can help in segmentation in email marketing,in their standard full form separated by commas.
            4. Add 'roles' and 'departments' extracted from "provided job title" in 'Department'.
            5. There should not be any 'special characters' and 'numbers' like '2nd', '2', 'Li' in 'designations'.
            6. Don't repeat "provided job title" in extracted 'designations'.
            
            whenever I provide input in the format 
            1. Job Title: 
           
            Remember to just give output in the exact format like 
            
            1. Designations: 
            
            2. Department:  
            

            Job Title : {title}
        
            """
            # Initialize variables for retry behavior
            retries = 3
            success = False

            while not success and retries > 0:
                try:
                    # Make the API call
                    response = openai.Completion.create(
                        engine="text-davinci-003",
                        prompt=prompt,
                        temperature=0.5,
                        max_tokens=200
                    )

                    # Extract and print the corrected job title
                    corrected_job_title = response['choices'][0]['text'].strip().replace("Answer:", "")
                    output = corrected_job_title
                    st.write(corrected_job_title)
                    # Splitting the output into two parts
                    designations_part, industries_part = output.split("Department")
                    
                    # Cleaning and formatting the parts
                    designations_part = designations_part.strip().replace("Designations:", "")
                    # Remove all instances of "Designations:"
                    while "Designations" in designations_part:
                        designations_part = designations_part.strip().replace("Designations :", "")

                    


                    industries_part = industries_part.strip().replace(":", "")
                    
                    df.at[index,'Extracted_Title'] = designations_part
                    df.at[index, 'Extracted Industry'] = industries_part
                    df.at[index,'JobTitle'] = row["JobTitle"]
                    

                    success = True

                except OpenAIError as e:
                    st.write(f"Wait I'm Retrying...")
                    # print(f"Error: {e}. Retrying...")
                    retries -= 1
                    time.sleep(5)  # Wait for 5 seconds before retrying

            if not success:
                st.write("Failed to update after 3 retries. Skipping...")

        # Record the end time
        end_time = time.time()

        # Calculate the elapsed time
        elapsed_time = end_time - start_time

        # Display the elapsed time in seconds
        st.write(f"Elapsed Time: {elapsed_time} seconds")
        
        st.write(df)
         
        st.success("excel file generated successfully")
    
        csv_content= df.to_csv(index=False)
        
        st.download_button(
                    label="Download CSV",
                    data=csv_content,
                    file_name="Job Title.csv",
                    mime="text/csv")


if __name__ == "__main__":
    main()



    