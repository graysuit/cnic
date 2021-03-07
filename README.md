# Pakistani National Card Pattern
This document describes how an **Pakistani cnic (NATIONAL IDENTITY CARD) number** looks like and what **information** can we get from it.
According to official **NADRA** [defination](https://www.nadra.gov.pk/identity/identity-cnic) , NIC is defined as
```
National Identity Card (NIC) is issued to the citizens of Pakistan. 
It is a blend of state-of-the-art technology and well-defined business rules to guarantee its authenticity and validity. 
The unique 13 digit identification number is recognized all over the country. 
It is the first requirement of individuals as it is mandatory to obtain documents like license, NTN, bank account, passport, cellular connection etc. 
Every citizen of Pakistan, 18 years and above, is eligible for NIC.
```
## Sample 
CNIC number looks like:
```
5746905324567
0975345678053
0975431479567
7365487234023
2374982638947
2634962936438
```
If you try to focus, you would see all numbers are 13 digit.

## Pattern
It's not just a number. It's like a pakistani DNA or fingerprint. You can get alot information from it. 

It is in pattern `ABCDE-FGHIJKL-M`

- [`A`](#a-province) shows `PROVINCE` e.g `PUNJAB`
- `B` shows `DIVISION` e.g `SARGHODHA`
- `C` shows `DISTRICT`
- `D` shows `TEHSIL`  
- `E` shows `UNION COUNSIL`  

- `FGHIJKL` shows `FAMILY TREE`

- [`M`](#m-gender) shows `GENDER` e.g `MALE` or `FEMALE`

### A (Province)
- If A = 1 Then Resident lives in `KPK`
- If A = 2 Then Resident lives in `FATA`
- If A = 3 Then Resident lives in `PUNJAB`
- If A = 4 Then Resident lives in `SINDH`
- If A = 5 Then Resident lives in `BALOCHISTAN`
- If A = 6 Then Resident lives in `ISLAMABAD`
- If A = 7 Then Resident lives in `Gilgit-Baltistan`


### M (Gender)
- IF M = 1 or 3 or 5 or 7 or 9 Then Resident is `MALE`
- IF M = 2 or 4 or 6 or 8      Then Resident is `FEMALE`

# How to get Family Tree from cnic no. ?
Send text message to `8008` along with cnic number without dashes in format `ABCDEFGHIJKL`.

# Contribute
Document still incomplete due to lack of knowledge. If you think anything more be added, please add it without any hesitation at [issues](https://github.com/graysuit/Pakistan-Card-Pattern/issues) or [Pull Request](https://github.com/graysuit/Pakistan-Card-Pattern/pulls).
