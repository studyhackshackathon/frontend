"use client"
import { Text } from "@chakra-ui/react"
import Image from "next/image";
import Link from 'next/link'
//import {signIn} from 'next-auth/client';

export default function page() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          size: "md",
          background: "#8B3C7F",
        }}
      >
        <div
          style={{
            width: 638,
            height: 241,
            left: 54,
            top: 323,
            position: "absolute",
            size: "md",
            textAlign: "center",
            color: "black",
            fontSize: 64,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Unlock Your Learning Potential <br />
          with AI.
        </div>
        <div
          style={{
            width: 507,
            height: 60,
            left: 123,
            top: 624,
            position: "absolute",
            size: "sm",
            textAlign: "center",
            color: "black",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Welcome to StudyHacks, your gateway to simplified learning. Discover
          how our AI-powered platform transforms your notes and materials into
          personalized study guides, making complex topics easier to master.
        </div>
        <img
          style={{
            width: 289,
            height: 80,
            left: 101,
            top: 39,
            position: "absolute",
            size: "sm",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 5,
          }}
          src="/assets/logo.png"
        />
        <img
          style={{
            width: 557,
            height: 380,
            left: 765,
            top: 148,
            position: "absolute",
            size: "sm",
            boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
          }}
          src="/assets/Land1.png"
        />
        <img
          style={{
            width: 627,
            height: 441,
            left: 632,
            top: 417,
            position: "absolute",
            size: "sm",
            boxShadow: "10px -10px 10px 5px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
          }}
          src="/assets/land2.png"
        />
        <div
          style={{
            width: 109,
            height: 45,
            left: 1194,
            top: 47,
            size: "sm",
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 99,
              height: 45,
              left: 86,
              top: 45,
              position: "absolute",
              size: "sm",
              transform: "rotate(-180deg)",
              transformOrigin: "0 0",
              background: "#8B3C7F",
              borderRadius: 10,
            }}
          />

          <Link
            href="#"
            style={{
              left: 0,
              top: 10,
              position: "absolute",
              textAlign: "center",
              color: "black",
              size: "sm",
              fontSize: 20,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            sign In
          </Link>
        </div>
        <div
          style={{
            left: 1297,
            top: 61,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 20,
            size: "sm",
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          <Link href="#">FAQ</Link>
        </div>
        <div
          style={{
            width: 298,
            height: 45,
            left: 224,
            top: 721,
            size: "sm",
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 135,
              height: 45,
              left: 0,
              top: 0,
              size: "sm",
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 135,
                height: 45,
                left: 135,
                top: 45,
                size: "sm",
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                background: "#8B3C7F",
                borderRadius: 10,
              }}
            />
            <div
              style={{
                left: 12,
                top: 11,
                position: "absolute",
                size: "sm",
                textAlign: "center",
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              <Link href="#">Get started</Link>{" "}
            </div>
          </div>
          <div
            style={{
              width: 131,
              height: 25,
              left: 167,
              top: 10,
              size: "sm",
              position: "absolute",
            }}
          >
            <div
              style={{
                left: 0,
                top: 0,
                position: "absolute",
                size: "sm",
                textAlign: "center",
                color: "black",
                fontSize: 20,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              <Link href="#">learn more</Link>{" "}
            </div>
            <div
              style={{
                width: 24,
                height: 24,
                left: 107,
                top: 1,
                size: "sm",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                  size: "sm",
                  position: "absolute",
                }}
              ></div>
              <div
                style={{
                  width: 16,
                  height: 8,
                  left: 4,
                  top: 8,
                  size: "sm",
                  position: "absolute",
                  background: "black",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
}