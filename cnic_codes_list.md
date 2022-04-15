
Suppose, I have example cnic `55201-1234567-7`. Note first 5 digits i.e `55201`. Treeview will look like
```python
5 = BALOCHISTAN
    5 = SIBBI
        2 = KOHLU
            0 = empty
                1 = KAHAAN
```
So location is `Kahaan, Kohlu, Sibbi, Balochistan`

# Cnic Codes TreeView:
Each code represents a specific place name. Mostly `0` means `null`/`nothing`/`empty`.
```python
 ___1) KHYBER PAKHTUNKHWA
|   \___1) BANNU
|   |   \___1) BANNU
|   |   |   \___0
|   |   |       \___1) BANNU
|   |   |       \___2) DOMAIL
|   |   \___2) BANNU CANTONMENT
|   |       \___0
|   |           \___1) LUCKY MARWAT
|   |           \___2) SARAI NORANG
|   \___2) DERA ISMAIL KHAN
|   |   \___1) DERA ISMAIL KHAN
|   |   |   \___0
|   |   |       \___1) DERA ISMAIL KHAN
|   |   |       \___2) KULACHI
|   |   |       \___3) PAHARRPUR
|   |   |       \___4) DARABIN
|   |   |       \___5) PERWA
|   |   \___2) TAANK
|   |       \___0) TAANK
|   |           \___1) TAANK
|   \___3) HAZARA
|   |   \___1) ABBOTTABAD
|   |   |   \___0) HAVELIAN
|   |   |       \___1) BANDA
|   |   |       \___2) SEER GARHI
|   |   \___2) BATAGRAM
|   |   |   \___0
|   |   |       \___1) ELAI
|   |   |       \___2) KOOZA BANDA
|   |   \___3) HARIPUR
|   |   |   \___0
|   |   |       \___1) GHAZI
|   |   |       \___2) KOT NAJEEBULLAH
|   |   \___4) KOHISTAN
|   |   |   \___0
|   |   |       \___1) DASO
|   |   |       \___2) KOLAYE PALS
|   |   |       \___3) PATAN
|   |   \___5) MANSEHRA
|   |       \___0
|   |           \___1) BALAKOT
|   |           \___2) KALA DHAKA
|   |           \___3) MANSEHRA
|   |           \___4) AUGI
|   \___4) KOHAT
|   |   \___1
|   |   |   \___0) HANGU
|   |   |       \___1) HANGU
|   |   |       \___2) TAL
|   |   \___2
|   |   |   \___0) KARAK
|   |   |       \___1) BANDA DAUD SHAH
|   |   |       \___2) KARAK
|   |   |       \___3) TAKHT NUSRATI
|   |   \___3
|   |       \___0) KOHAT
|   |           \___1) KOHAT
|   |           \___2) LAACHI
|   \___5) MALAKAND
|   |   \___0) DEER
|   |   |   \___0
|   |   |       \___0
|   |   \___1) BUNER
|   |   |   \___0) BUNER
|   |   |       \___1) DAGAR
|   |   |       \___2) GAGARAH
|   |   |       \___3) TOTALAYE
|   |   |       \___4) MANDNARH
|   |   \___2) LOWER CHITRAL
|   |   |   \___0) LOWER CHITRAL
|   |   |       \___1) CHITRAL
|   |   |       \___2) MASTUJ
|   |   \___3) LOWER DEER
|   |   |   \___0) LOWER DIR
|   |   |       \___1) KHALL
|   |   |       \___2) TEMARGARA
|   |   |       \___3) SAMAR BAGH
|   |   |       \___4) MUNDA
|   |   |       \___5) LAL QILA
|   |   |       \___6) BALAMBAT
|   |   |       \___7) AUDN ZAI
|   |   \___4) MALAKAND
|   |   |   \___0
|   |   |       \___1) DARGAI
|   |   |       \___2) BUTT KHELA
|   |   \___5) SHANGLA
|   |   |   \___0
|   |   |       \___1) ALPURI
|   |   |       \___2) BASHAAM
|   |   |       \___3) CHAKESAR
|   |   |       \___4) MARTOANG
|   |   |       \___5) PURAN
|   |   \___6) SWAT
|   |   |   \___0
|   |   |       \___1) MATTA
|   |   |       \___2) MINGORA
|   |   |       \___3) BREKOT
|   |   |       \___4) KABL
|   |   |       \___5) KHAWAZA KHAILA
|   |   |       \___6) CHARBAGH
|   |   |       \___7) BABU ZAI
|   |   \___7) UPPER DIR
|   |       \___0
|   |           \___1) JABAR
|   |           \___2) WARHI
|   |           \___3) KALKOT
|   |           \___4) BRAWAL
|   |           \___5) KHAL
|   \___6) MARDAN
|   |   \___1) MARDAN
|   |   |   \___0
|   |   |       \___1) MARDAN
|   |   |       \___2) TAKHT BHAI
|   |   |       \___3) KATLANG
|   |   \___2) SWABI
|   |       \___0
|   |           \___1) LAHOR
|   |           \___2) SWABI
|   |           \___3) TOPI
|   |           \___4) RAZRR
|   \___7) PESHAWAR
|       \___1) CHARSADDA
|       |   \___0
|       |       \___1) CHARSADDA
|       |       \___2) TANGI
|       |       \___3) SHAHQADAR
|       \___2) NOWSHERA
|       |   \___0
|       |       \___1) NOWSHERA
|       |       \___2) PABBI
|       \___3) PESHAWAR
|           \___0
|               \___1) KHAIL
\___2) FATA
|   \___1) AGENCY
|   |   \___1) BAJOUR
|   |   |   \___0
|   |   |       \___1) BAR CHAMAR KAND
|   |   |       \___2) BARANG
|   |   |       \___3) KHAAR
|   |   |       \___4) MAMOND
|   |   |       \___5) NAWAGAI
|   |   |       \___6) SALAARZAI
|   |   |       \___7) UTMAANKHAIL
|   |   \___2) KHYBER
|   |   |   \___0
|   |   |       \___1) BARHA
|   |   |       \___2) JAMROD
|   |   |       \___3) LANDI KOTAL
|   |   |       \___4) MAULA GHAURI
|   |   \___3) KARAM
|   |   |   \___0
|   |   |       \___1) CENTRAL KARAM AGENCY
|   |   |       \___2) LOWER KARAM AGENCY
|   |   |       \___3) UPPER KARAM AGENCY
|   |   \___4) MEHMAND
|   |   |   \___0
|   |   |       \___1) UTMAAN KHAIL (AMBER)
|   |   |       \___2) HALEEMZAI
|   |   |       \___3) PINDIALA
|   |   |       \___4) PRINGHAR
|   |   |       \___5) SAFI
|   |   |       \___6) UPPER MEHMAND
|   |   |       \___7) YAKKA GHUND
|   |   \___5) NARTH WAZIRISTAN
|   |   |   \___0
|   |   |       \___1) DITTA KHAIL
|   |   |       \___2) DOSLI
|   |   |       \___3) GARHOM
|   |   |       \___4) GHULAM KHAN
|   |   |       \___5) MIR ALI
|   |   |       \___6) MERAN SHAH
|   |   |       \___7) RAZMAK
|   |   |       \___8) SHIVA
|   |   |       \___9) SPAINWAAM
|   |   \___6) ORAKZAI
|   |   |   \___0
|   |   |       \___1) CENTRAL
|   |   |       \___2) ISMAILZAI
|   |   |       \___3) LOWER
|   |   |       \___4) UPPER
|   |   \___7) SOUTH WAZIRISTAN
|   |       \___0
|   |           \___1) BARMAIL
|   |           \___2) LIDHA
|   |           \___3) MAKEN
|   |           \___4) SARAROGHA
|   |           \___5) SARWEEKAI
|   |           \___6) TIYARZA
|   |           \___7) TOI KHALA
|   |           \___8) WANA
|   \___2) QABAILI ILAQA
|       \___1) LUCKY MARWAT
|       |   \___0
|       |       \___1) LUCKY MARWAT
|       \___2) BANNU
|       |   \___0
|       |       \___1) BANNU
|       \___3) DERA ISMAIL KHAN
|       |   \___0
|       |       \___1) DERA ISMAIL KHAN
|       \___4) KOHAT
|       |   \___0
|       |       \___1) KOHAT
|       \___5) PESHAWER
|       |   \___0
|       |       \___1) PESHAWER
|       \___6) TANK
|           \___0
|               \___1) TANK
\___3) PUNJAB
|   \___1) BAHAWALPUR
|   |   \___1) BAHAWALNAGAR
|   |   |   \___0
|   |   |       \___1) BAHAWALNAGAR
|   |   |       \___2) CHISHTIAN
|   |   |       \___3) FORT ABBAS
|   |   |       \___4) HAROONABAD
|   |   |       \___5) MUNCHANABAD
|   |   \___2) BAHAWALPUR
|   |   |   \___0
|   |   |       \___1) AHMEDPUR EAST
|   |   |       \___2) BAHALPUR
|   |   |       \___3) HASILPUR
|   |   |       \___4) KHAIRPUR TAMIWALI
|   |   |       \___5) YAZMAAN
|   |   \___3) RAHIM YAAR KHAN
|   |       \___0
|   |           \___1) KHAN PUR
|   |           \___2) LIAQUATPUR
|   |           \___3) RAHIM YAAR KHAN
|   |           \___4) SADIQABAD
|   \___2) DERA GHAZI KHAN
|   |   \___1) DERA GHAZI KHAN
|   |   |   \___0
|   |   |       \___1) BARTHI
|   |   |       \___2) DERA GHAZI KHAN
|   |   |       \___3) TONSA
|   |   \___2) LAYYAH
|   |   |   \___0
|   |   |       \___1) CHOBARAH
|   |   |       \___2) KAROORH LAL EESAN
|   |   |       \___3) LAYYAH
|   |   \___3) MUZAFFARGARH
|   |   |   \___0
|   |   |       \___1) ALIPUR
|   |   |       \___2) JATOI
|   |   |       \___3) KOT ADDU
|   |   |       \___4) MUZAFFARGARH
|   |   \___4) RAJANPUR
|   |       \___0
|   |           \___1) RAJAN PUR (QABAILI ILAQA)
|   |           \___2) JAM PUR
|   |           \___3) RAJAN PUR
|   |           \___4) ROJHAAN
|   \___3) FAISALABAD
|   |   \___1) FAISALABAD
|   |   |   \___0
|   |   |       \___0) FAISLABAD
|   |   |       \___1) CHAK JHUMRA
|   |   |       \___2) FAISALABAD CITY
|   |   |       \___3) FAISALABAD SADAR
|   |   |       \___4) JARANWALA
|   |   |       \___5) SAMANDRI
|   |   |       \___6) TANDLIANWALA
|   |   \___2) JHANG
|   |   |   \___0
|   |   |       \___1) CHINIOT
|   |   |       \___2) JHANG
|   |   |       \___3) SHORKOT
|   |   |       \___4) AHMAD PUR SIAL
|   |   |       \___5) ATHARA HAZARI
|   |   \___3) TOBA TEK SINGH
|   |   |   \___0
|   |   |       \___1) GOJRA
|   |   |       \___2) KAMALIA
|   |   |       \___3) TOBA TEK SINGH
|   |   \___4) CHINIOT
|   |       \___0
|   |           \___1) CHINIOT
|   |           \___2) LALIAN
|   |           \___3) BHAWANA
|   \___4) GUJRANWALA
|   |   \___1) GUJRANWALA
|   |   |   \___0
|   |   |       \___1) GUJRANWALA
|   |   |       \___2) KAMOKI
|   |   |       \___3) NOWSHERA WARQA
|   |   |       \___4) WAZIRABAD
|   |   \___2) GUJRAT
|   |   |   \___0
|   |   |       \___1) JALALPUR JATAN
|   |   |       \___2) KHARIAN
|   |   |       \___3) SARAI ALAMGIR
|   |   \___3) HAFIZABAD
|   |   |   \___0
|   |   |       \___1) HAFIZABAD
|   |   |       \___2) PINDI BHATIAN
|   |   \___4) MANDI BAHAUDDIN
|   |   |   \___0
|   |   |       \___1) MALIKWAL
|   |   |       \___2) MANDI BAHAUDDIN
|   |   |       \___3) PHALIA
|   |   \___5) NAROWAL
|   |   |   \___0
|   |   |       \___1) NAROWAL
|   |   |       \___2) SHAKARGARH
|   |   |       \___3) ZAFARWAAL
|   |   \___6) SIALKOT
|   |       \___0
|   |           \___1) DASKA
|   |           \___2) PASROOR
|   |           \___3) SIALKOT
|   |           \___4) SAMBARHYAL
|   \___5) LAHORE
|   |   \___1) KASUR
|   |   |   \___0
|   |   |       \___1) CHONIYA
|   |   |       \___2) KASUR
|   |   |       \___3) PATTOKI
|   |   |       \___4) KOT RADHA KISHAN
|   |   \___2) LAHORE
|   |   |   \___0
|   |   |       \___0) MODEL TOWN
|   |   |       \___1) LAHORE CANTONMENT
|   |   |       \___2) LAHORE CITY
|   |   \___3) OKARA
|   |   |   \___0
|   |   |       \___1) DEPALPUR
|   |   |       \___2) OKARA
|   |   |       \___3) RENALA KHURD
|   |   \___4) SHEIKHUPURA
|   |   |   \___0
|   |   |       \___1) FEROZWALA
|   |   |       \___2) NANKANA SAHIB
|   |   |       \___3) SAFDARABAD
|   |   |       \___4) SHEIKHUPURA
|   |   |       \___5) MUREEDKAY
|   |   \___5) NANKANA SAHIB
|   |       \___0
|   |           \___1) NANKANA SAHIB
|   |           \___2) KOT SHAH
|   |           \___3) SANGLA HUL
|   |           \___4) SAFDARABAD
|   \___6) MULTAN
|   |   \___1) KHANEWAL
|   |   |   \___0
|   |   |       \___1) JAHANIAN
|   |   |       \___2) KABEERWALA
|   |   |       \___3) KHANEWAL
|   |   |       \___4) MIAN CHUNNU
|   |   \___2) LODHRAN
|   |   |   \___0
|   |   |       \___1) DUNIYAPUR
|   |   |       \___2) PAKKA KAROORH
|   |   |       \___3) LODHRAN
|   |   \___3) MULTAN
|   |   |   \___0
|   |   |       \___1) JALALPUR PIRWALA
|   |   |       \___2) MULTAN CITY
|   |   |       \___3) MULTAN SADAR
|   |   |       \___4) SHUJABAD
|   |   \___4) PAK PATTAN
|   |   |   \___0
|   |   |       \___1) ARIF WALA
|   |   |       \___2) PAK PATTAN
|   |   \___5) SAHIWAL
|   |   |   \___0
|   |   |       \___1) CHICHAWATNI
|   |   |       \___2) SAHIWAL
|   |   \___6) VEHARI
|   |       \___0
|   |           \___1) BUREWALA
|   |           \___2) MAILSI
|   |           \___3) VEHARI
|   \___7) RAWALPINDI
|   |   \___1) ATTOCK
|   |   |   \___0
|   |   |       \___1) ATTOCK
|   |   |       \___2) FATEH JANG
|   |   |       \___3) HASSAN ABDAAL
|   |   |       \___4) JAND
|   |   |       \___5) PINDI GHAIB
|   |   |       \___6) HAZRO
|   |   \___2) CHAKWAL
|   |   |   \___0
|   |   |       \___1) CHAKWAL
|   |   |       \___2) CHOA SAEEDAN SHAH
|   |   |       \___3) TALAGANG
|   |   |       \___4) KALAR KAHAR
|   |   \___3) JHELUM
|   |   |   \___0
|   |   |       \___1) JHELUM
|   |   |       \___2) PIND DADAN KHAN
|   |   |       \___3) SOHAWA
|   |   |       \___4) DINA
|   |   \___4) RAWALPINDI
|   |       \___0
|   |           \___1) GOJAR KHAN
|   |           \___2) KAHUTA
|   |           \___3) KOTLI SATTIYAN
|   |           \___4) MURREE
|   |           \___5) RAWALPINDI
|   |           \___6) TAXILA
|   |           \___7) KALAR SYEDAN
|   \___8) SARGODHA
|       \___1) BHAKKAR
|       |   \___0
|       |       \___1) BHAKKAR
|       |       \___2) DRIYA KHAN
|       |       \___3) KALOR KOT
|       |       \___4) MAKIRAH
|       \___2) KHUSHAB
|       |   \___0
|       |       \___1) JOHARABAD
|       |       \___2) NURPUR THAL
|       |       \___3) QAIDABAD
|       \___3) MIANWALI
|       |   \___0
|       |       \___1) EESA KHAI
|       |       \___2) MIANWALI
|       |       \___3) PIPLAAN
|       \___4) SARGODHA
|           \___0
|               \___1) BHALWAAL
|               \___2) SAHIWAL
|               \___3) SARGODHA
|               \___4) SHAHPUR
|               \___5) SILANWALI
|               \___6) KOT MOMIN
\___4) SINDH
|   \___1) HYDERABAD
|   |   \___1) BADEEN
|   |   |   \___0
|   |   |       \___1) BADEEN
|   |   |       \___2) GOLARHCHI
|   |   |       \___3) MAATLI
|   |   |       \___4) TANDO BAAGO
|   |   |       \___5) TALHAAR
|   |   \___2) DADU
|   |   |   \___0
|   |   |       \___1) GOTH DADU
|   |   |       \___2) JOHI
|   |   |       \___3) KHAIRPUR NATAN SHAH
|   |   |       \___4) KOTRI
|   |   |       \___5) MEHARR
|   |   |       \___6) SEHOHAN SHARIF
|   |   |       \___7) THANO BOLA KHAN
|   |   \___3) HYDERABAD
|   |   |   \___0
|   |   |       \___1) HALA
|   |   |       \___2) HYDERABAD CITY
|   |   |       \___3) HYDERABAD
|   |   |       \___4) LATIFABAD
|   |   |       \___5) MATIYARI
|   |   |       \___6) QASIMABAD
|   |   |       \___7) TANDO ALLAH YAAR
|   |   |       \___8) TANDO MUHAMMAD KHAN
|   |   \___4) THATTA
|   |   |   \___0
|   |   |       \___1) GHORHABARHI
|   |   |       \___2) JAATI
|   |   |       \___3) KETI BANDAR
|   |   |       \___4) KAROW CHAN
|   |   |       \___5) MIRPUR BATHORO
|   |   |       \___6) MIRPUR SAAKRO
|   |   |       \___7) SHAH BANDAR
|   |   |       \___8) SAJAWAL
|   |   |       \___9) THATTA
|   |   \___5) JAMSHORO
|   |   |   \___0
|   |   |       \___4) KOTRHI
|   |   |       \___5) MNJHND
|   |   |       \___6) SEHOHAN SHARIF
|   |   |       \___7) THANO BOLA KHAN
|   |   \___6) TANDO MUHAMMAD KHAN
|   |   |   \___0
|   |   |       \___1) TANDO MUHAMMAD KHAN
|   |   |       \___2) BULRREY SHAH KAREEM
|   |   |       \___3) TANDO GHULAM HAIDER
|   |   \___7) TANDO ALLAHIAR
|   |   |   \___0
|   |   |       \___1) TANDO ALLAHIAR
|   |   |       \___2) CHEMBERR
|   |   |       \___3) JHANDO MURREE
|   |   \___8) MATIYARI
|   |       \___0
|   |           \___1) BHAT SHAH
|   |           \___2) HALA
|   |           \___3) SAEEDABAD
|   \___2) KARACHI
|   |   \___0) KORANGI
|   |   |   \___0
|   |   |       \___0
|   |   \___1) KARACHI WASTI
|   |   |   \___0
|   |   |       \___1
|   |   \___2) KARACHI SHARKI
|   |   |   \___0
|   |   |       \___1
|   |   \___3) KARACHI SOUTH
|   |   |   \___0
|   |   |       \___1
|   |   \___4) KARACHI GHARBI
|   |   |   \___0
|   |   |       \___1
|   |   \___5) MALEER
|   |       \___0
|   |           \___1
|   \___3) LARKANA
|   |   \___1) JACOBABAD
|   |   |   \___0
|   |   |       \___1) GARHI KHAIRU
|   |   |       \___2) JACOBABAD
|   |   |       \___3) KANDHKOT
|   |   |       \___4) KASHMOR
|   |   |       \___5) THAL
|   |   \___2) LARKANA
|   |   |   \___0
|   |   |       \___1) DOKRI
|   |   |       \___2) QAMBAR
|   |   |       \___3) LARRKANO
|   |   |       \___4) MIRUKHAN
|   |   |       \___5) RATODERO
|   |   |       \___6) BAQRANI
|   |   |       \___7) WAARH
|   |   \___3) SHIKARPUR
|   |   |   \___0
|   |   |       \___1) GARHI YAASEEN
|   |   |       \___2) KHANPUR
|   |   |       \___3) LUCKY
|   |   |       \___4) SHIKARPUR
|   |   \___4) QAMBAR SHAHDADKOT
|   |   |   \___0
|   |   |       \___1) SAJAWAL JUNEJO
|   |   |       \___2) QAMBAR
|   |   |       \___3) NASEERABAD
|   |   |       \___4) MIRU KHAN
|   |   |       \___5) QABO SAEED KHAN
|   |   |       \___6) SHAHDAD KOT
|   |   |       \___7) WAARH
|   |   \___5) KASHMOR
|   |       \___0
|   |           \___2) TANWATI
|   |           \___3) KUNDH KOT
|   |           \___4) KASHMOR
|   \___4) MIRPUR KHAS
|   |   \___1) MIRPUR KHAS
|   |   |   \___0
|   |   |       \___1) DEGREE
|   |   |       \___2) KOT GHULAM MUHAMMAD
|   |   |       \___3) MIRPUR KHAS
|   |   |       \___4) KANRI
|   |   |       \___5) PATHORO
|   |   |       \___6) SAMARO
|   |   |       \___7) UMARKOT
|   |   |       \___8) JHADO
|   |   |       \___9) SINDHRI
|   |   \___2) SANGHAR
|   |   |   \___0
|   |   |       \___1) JAAM NAWAZ ALI
|   |   |       \___2) KUPRO
|   |   |       \___3) SANGHAR
|   |   |       \___4) SHAHDADPUR
|   |   |       \___5) SANJHORO
|   |   |       \___6) TANDO ADAM KHAN
|   |   \___3) THARPARKAR
|   |   |   \___0
|   |   |       \___1) CHARCHRO
|   |   |       \___2) DEPLO
|   |   |       \___3) MATTI
|   |   |       \___4) NANGAR PARKAR
|   |   \___4) UMARKOT
|   |       \___0
|   |           \___1) UMARKOT
|   |           \___2) SAMARO
|   |           \___3) PATHORO
|   |           \___4) KENRI
|   \___5) SUKKUR
|       \___1) GHOTKI
|       |   \___0
|       |       \___1) DHARKI
|       |       \___2) GHOTKI
|       |       \___3) KHAN GABARH
|       |       \___4) MIRPUR MATHELO
|       |       \___5) OBHARO
|       \___2) KHAIRPUR
|       |   \___0
|       |       \___1) FAIZ GANJ
|       |       \___2) GAMBAT
|       |       \___3) KHAIRPUR
|       |       \___4) KANGRI
|       |       \___5) KOT DHAJI
|       |       \___6) THARI MIRWAH
|       |       \___7) NARO
|       |       \___8) SOBHODERO
|       \___3) NOSHERO FEROZ
|       |   \___0
|       |       \___1) BARRIA
|       |       \___2) KUNDIYARO
|       |       \___3) MORO
|       |       \___4) NOSHERO FEROZ
|       |       \___5) MEHRABPUR
|       \___4) SHAHEED BENAZIRABAD
|       |   \___0
|       |       \___1) QAZI AHMAD
|       |       \___2) NAWAB SHAH
|       |       \___3) SAKRAND
|       |       \___4) DAUR
|       \___5) SUKKUR
|           \___0
|               \___1) PANO AKIL
|               \___2) ROHRHI
|               \___3) SALEH PAT
|               \___4) SUKKUR CITY
|               \___5) NEW SUKKUR
\___5) BALOCHISTAN
|   \___1) KALAT
|   |   \___1) AWARAN
|   |   |   \___0
|   |   |       \___1) AWARAN
|   |   |       \___2) MASHKAI
|   |   |       \___3) JHAL JHAO
|   |   \___2) KALAT
|   |   |   \___0
|   |   |       \___1) KALAT
|   |   |       \___2) SORAB
|   |   |       \___3) MANGCHAR
|   |   \___3) WASHUK
|   |   |   \___0
|   |   |       \___1) KHAARAAN
|   |   |       \___2) MASHJAIL
|   |   |       \___3) BASEMA
|   |   \___4) KHUZDAR
|   |   |   \___0
|   |   |       \___1) KHUZDAR
|   |   |       \___2) NAL
|   |   |       \___3) WADH
|   |   |       \___4) ZUHRI
|   |   \___5) HUB
|   |   |   \___0
|   |   |       \___1) LASBELA
|   |   |       \___2) DARIJI
|   |   |       \___3) HUB
|   |   |       \___4) KANRAJ
|   |   |       \___5) OTHAL
|   |   |       \___6) LAKHARHA
|   |   |       \___7) SOUNMIYANI
|   |   |       \___8) GADANI
|   |   \___6) MASTUNG
|   |       \___0
|   |           \___1) DASHT
|   |           \___2) MASTUNG
|   \___2) MAKRAN
|   |   \___1) GAWADAR
|   |   |   \___0
|   |   |       \___1) GAWADAR
|   |   |       \___2) PASNI
|   |   |       \___3) JEVANI
|   |   \___2) KECH
|   |   |   \___0
|   |   |       \___1) BALIDAH
|   |   |       \___2) DASHT
|   |   |       \___3) TURBAT
|   |   |       \___4) TAMP
|   |   |       \___5) MAND
|   |   \___3) PANJGUR
|   |       \___0
|   |           \___1
|   \___3) NASEERABAD
|   |   \___1) KACHI
|   |   |   \___0
|   |   |       \___1) BHAAG
|   |   |       \___2) DHADAR
|   |   |       \___3) MACHA
|   |   |       \___4) SUNNI
|   |   \___2) JAFFARABAD
|   |   |   \___0
|   |   |       \___1) JHAT PAT
|   |   |       \___2) OSTA MUHAMAD
|   |   |       \___3) SOHBATPUR
|   |   |       \___4) GANDAKHA
|   |   \___3) JHAL MAGSI
|   |   |   \___0
|   |   |       \___1) GANDAVAH
|   |   |       \___2) JHAL MAGSI
|   |   |       \___3) KACHI BHAAG
|   |   |       \___4) KACHI SUNNI
|   |   |       \___5) KACHI MACHA
|   |   |       \___6) KACHI DHADR
|   |   \___4) NASEERABAD
|   |       \___0
|   |           \___1) CHATTAR
|   |           \___2) DERA MURAD JAMALI
|   |           \___3) JHAT PAT
|   |           \___4) OSTA MUHAMMAD
|   |           \___5) TAMBO
|   \___4) QUETTA
|   |   \___1) CHAGHI
|   |   |   \___0
|   |   |       \___1) DALBANDIN
|   |   |       \___2) NUSHKI
|   |   |       \___3) TAFTAN
|   |   |       \___4) NOKANDI
|   |   \___2) QILA ABDULLAH
|   |   |   \___0
|   |   |       \___1) CHAMAN
|   |   |       \___2) GUISTAN
|   |   |       \___3) QILA ABDULLAH
|   |   \___3) PISHIN
|   |   |   \___0
|   |   |       \___1) BARSHORE
|   |   |       \___2) KARIZAAT
|   |   |       \___3) PISHIN
|   |   |       \___4) SIRANAN
|   |   |       \___5) HARAMZAI
|   |   \___4) QUETTA
|   |   |   \___0
|   |   |       \___0) QUETTA SADAR
|   |   |       \___1) QUETTA CITY
|   |   |       \___2) PANJPAI
|   |   |       \___3
|   |   \___5) NUSHKI
|   |       \___0
|   |           \___1
|   \___5) SIBBI
|   |   \___1) DERA BUGTI
|   |   |   \___0
|   |   |       \___1) DERA BUGTI
|   |   |       \___2) PHAILOGH
|   |   |       \___3) SUI
|   |   \___2) KOHLU
|   |   |   \___0
|   |   |       \___1) KAHAAN
|   |   |       \___2) KOHLU
|   |   |       \___3) MAUND
|   |   \___3) SIBBI
|   |   |   \___0
|   |   |       \___1) HARNAI
|   |   |       \___2) KOHLU
|   |   |       \___3) SIBBI
|   |   |       \___5) LEHRHI
|   |   |       \___6
|   |   \___4) ZIARAT
|   |   |   \___0
|   |   |       \___1) ZIARAT
|   |   |       \___2) SANJAVI
|   |   \___5) HARNAI
|   |       \___0
|   |           \___1) HARNAI
|   |           \___2) SHARAG
|   \___6) ZHOB
|       \___1) BARKHAN
|       |   \___0
|       |       \___1) BARKHAN
|       \___2) QILA SAIFULLAH
|       |   \___0
|       |       \___1) QILA SAIFULLAH
|       |       \___2) MUSIM BAGH
|       \___3) LORALAI
|       |   \___0
|       |       \___1) DAKKI
|       |       \___2) LORALAI
|       |       \___3) BARKHAN
|       |       \___4) MUSA KHAIL
|       \___4) MUSAKHAIL
|       |   \___0
|       |       \___1) MUSAKHAIL
|       |       \___2) KANGRI
|       \___5) ZHOB
|       |   \___0
|       |       \___1) QAMAR DIN KAREZ
|       |       \___2) SHERANI
|       |       \___3) ZHOB
|       \___6) ZHOB
|           \___0
|               \___1) SHERANI
\___6) ISLAMABAD
|   \___1
|       \___1
|           \___0
|               \___1
\___7) GILGIT
|   \___1
|       \___1) BALTISTAN
|       |   \___0
|       |       \___1) KARMANG
|       |       \___2) SHAGAR
|       |       \___3) SKARDU
|       |       \___4) RONADO
|       \___2) DIAMER
|       |   \___0
|       |       \___1) ASTOOR
|       |       \___2) CHALAS
|       |       \___3) TANGEER
|       \___3) GHANCHAY
|       |   \___0
|       |       \___1) KHAPLO
|       |       \___2) MASHABAROM
|       \___4) GHAZAR
|       |   \___0
|       |       \___1) GOPAS
|       |       \___2) PANIAL
|       |       \___4) ASHOMAN
|       \___5) HUNZA NAGAR
|       |   \___0
|       |       \___1) BASEN
|       |       \___2) HUNZA
|       |       \___3) NAGR
|       |       \___4) ALIABAD
|       |       \___5) GOJAAL
|       \___6) ASTOOR
|           \___0
|               \___1
\___8) AZAD KASHMIR
    \___1) MIRPUR
    |   \___1) BHIMBER
    |   |   \___0
    |   |       \___1) BARNALA
    |   |       \___2) BHIMBER
    |   |       \___3) SAMAHNI
    |   \___2) KOTLI
    |   |   \___0
    |   |       \___1) FATEHPUR THAKIALA NAKIAAL
    |   |       \___2) KOTLI
    |   |       \___3) SEHANSA
    |   \___3) MIRPUR
    |       \___0
    |           \___1) DUDYAAL
    |           \___2) MIRPUR
    \___2) MUZAFFARABAD
        \___1) BAGH
        |   \___0
        |       \___1) BAGH
        |       \___2) DHEERKOT
        |       \___3) HAVELI
        \___2) MUZAFFARABAD
        |   \___0
        |       \___1) ATHMUQAAM
        |       \___2) HATTIYAN BALA
        |       \___3) MUZAFFARABAD
        \___3) POONCH
        |   \___0
        |       \___1) ABBASPUR
        |       \___2) HAJERA
        |       \___3) RAWALAKOT
        \___4) SUDHANOTI
        |   \___0
        |       \___1) PLANDRI
        |       \___3) BALOCH
        \___5) NEELUM
        |   \___0
        |       \___1) ATHMUQAAM
        |       \___2) SHARDA
        \___6) HAVELI
        |   \___0
        |       \___2) FORWARD KAHUTA
        \___7) HATTIYAN BALA
            \___0
                \___1) HATTIYAN BALA
                \___3) CHAKAAR

```
