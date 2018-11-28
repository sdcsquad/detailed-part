USE datahaus;

DROP TABLE DETAILS;

CREATE TABLE details (
id INT PRIMARY KEY, 
name VARCHAR,
address VARCHAR,
price INT,
body TEXT,
subTitle VARCHAR,
ff_type TEXT,
ff_yearBuilt SMALLINT,
ff_heating TEXT,
ff_cooling TEXT,
ff_parking VARCHAR,
ff_lot VARCHAR,
ff_daysOnZillow TEXT,
ff_pricePerSqft SMALLINT,
ff_saves SMALLINT,
if_bedRoom TINYINT,
if_bathRoom VARCHAR,
if_heatingAndCooling TEXT,
if_basement TEXT,
if_flooring TINYINT,
if_other TEXT,
sm_size TINYINT,
sm_amenities TEXT,
sm_spaces VARCHAR,
c_typeAndStyle TEXT,
c_builtIn TEXT,
c_remodel TEXT,
c_roof TEXT,
c_exterior TEXT,
c_other TEXT,
ef_lot TINYINT,
ef_lotWidth TINYINT,
ef_other TEXT,
parking TEXT,
o_soldDate TEXT,
o_soldPrice INT,
a_daysOnZillow TEXT,
a_pastThirtydayView TINYINT,
a_savedLog TINYINT
);

COPY details (id,name,address,price,body,subTitle,ff_type,ff_yearBuilt,ff_heating,ff_cooling,ff_parking,ff_lot,ff_daysOnZillow,ff_pricePerSqft,ff_saves,if_bedRoom,if_bathRoom,if_heatingAndCooling,if_basement,if_flooring,if_other,sm_size,sm_amenities,sm_spaces,c_typeAndStyle,c_builtIn,c_remodel,c_roof,c_exterior,c_other,ef_lot,ef_lotWidth,ef_other,parking,o_soldDate,o_soldPrice,a_daysOnZillow,a_pastThirtydayView,a_savedLog) FROM '/Users/tarik/Documents/SDC Project/detailed-part/dataHouz.csv' WITH DELIMITER='|' AND HEADER=FALSE;

