#pragma once
class Triangle
{
private:
	int height;
	int width;
	void printLines(int numForPrint, int numOfLines)const;
public:
	Triangle(int myHeight, int myWidth);
	double perimeterTriangle()const;
	void printTriangle()const;
};

