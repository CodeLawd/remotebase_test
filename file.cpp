#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
#include <unordered_set>
using namespace std;

int solution(vector<string> &T, vector<string> &R)
{

	int count = 0;
	int result;
	string pre;
	vector<string> vec;
	vector<string> res;
	vector<string> seq;

	for (int i = 0; i < T[0].size(); i++)
	{
		if (T[0][i] >= '1' && T[0][i] <= '9')
			break;
		else
		{
			pre += T[0][i];
		}
	}

	int len = pre.size();

	for (int i = 0; i < T.size(); i++)
	{
		string lat;
		for (int j = 0; j < T[i].size(); j++)
		{
			lat += T[i][j];
		}
		vec.push_back(lat);
	}

	for (int i = 0; i < vec.size(); i++)
	{
		string num;

		for (int j = 0; j < vec[i].size(); j++)
		{
			if (vec[i][j] >= "1" && vec[i][j] <= "9")
				num += vec[i][j];
		}

		res.push_back(num);
	}
}