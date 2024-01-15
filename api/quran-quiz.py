import pandas as pd
import random

df = pd.read_csv("ayah_list.csv")

ayah_list = list(df)

random_number = random.randint(0, len(ayah_list) - 1)

selected_ayah = ayah_list[random_number]

print(selected_ayah.split(" "))

print(f"Randomly selected ayah: {selected_ayah}")