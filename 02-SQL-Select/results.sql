----------------------------------
--        SQL-Select-1-1        --
----------------------------------

-- 1. Zeige alle Daten aus der Customers-Tabelle an
SELECT * FROM Customers;

-- 2. Zeige nur die Spalten CustomerName, City und Country aus der Customers-Tabelle an.
SELECT CustomerName, City, Country FROM Customers;

-- 3. Zeige alle Kunden aus Deutschland an.
SELECT * FROM Customers WHERE Country='Germany';

-- 4. Zeige alle Kunden aus London, UK an.
SELECT * FROM Customers WHERE Country='UK' AND City='London';

-- 5. Zeige alle Kunden alphabetisch nach CustomerName sortiert an
SELECT * FROM Customers ORDER BY CustomerName;

-- 6. Zeige nur die ersten 5 Einträge der Tabelle Customers an
SELECT TOP 5 * FROM Customers;

-- 7. Gib die Gesamtzahl aller Einträge in der Customers-Tabelle aus
SELECT COUNT(*) FROM Customers;

----------------------------------
--        SQL-Select-2-1        --
----------------------------------

-- 1. Zeige alle Kunden aus der Customers-Tabelle an, deren Name mit A beginnt
SELECT * FROM Customers WHERE CustomerName LIKE 'A%';

-- 2. Sortiere die Kunden absteigend nach Postleitzahl
SELECT * FROM Customers ORDER BY PostalCode DESC;

-- 3. Zeige alle Kunden aus Mexico, sortiert zuerst nach Stadt und dann nach Kundenname
SELECT * FROM Customers WHERE COUNTRY='Mexico' ORDER BY City, CustomerName;

-- 4. Zeige  alle Kunden an, die sich in Deutschland, dem Vereinigten Königreich oder Frankreich befinden.
SELECT * FROM Customers WHERE Country='Germany' OR Country='UK' OR Country='France';

-- 5. Zeige alle Produkte an, die in Flaschen verkauft werden
SELECT * FROM Products WHERE Unit LIKE '%bottles%';

-- 6. Zeige alle Produkte an, deren Preis zwischen 20 und 30 Dollar liegt
SELECT * FROM Products WHERE Price BETWEEN 20 AND 30;

-- 7. Erstelle eine Liste, die die Anzahl der Produkte pro Kategorie anzeigt.
SELECT CategoryID, COUNT(*) FROM Products GROUP BY CategoryID;
